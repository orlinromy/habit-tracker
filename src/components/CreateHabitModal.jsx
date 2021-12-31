// The code below is from https://dev.to/viclafouch/build-a-complete-modal-component-with-react-hooks-2fk8 with modification
import React, {useState, useImperativeHandle, forwardRef, useCallback, useEffect} from "react";
import {createPortal} from "react-dom";
import CloseIcon from '@material-ui/icons/Close';

const modalElement = document.getElementById("modal-root");


function CreateHabitModal({children}, ref) {
    const fade = false;
    const [isOpen, setIsOpen] = useState(false);

    const close = useCallback(() => setIsOpen(false),[])

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close
    }),[close])

    const handleEscape = useCallback(event => {
        if (event.keyCode === 27) close()
    }, [close])
    
    useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
        document.removeEventListener('keydown', handleEscape, false)
    }
    }, [handleEscape, isOpen])

    return createPortal(
        isOpen &&  <div className={`modal ${fade ? 'modal-fade' : ''}`}>
                    <div className="modal-overlay" onClick={close} />
                    <span role="button" className="modal-close" aria-label="close" onClick={close}><CloseIcon /></span>
                    <div className="modal-body">{children}</div>
                    </div>, modalElement)
}

export default forwardRef(CreateHabitModal);