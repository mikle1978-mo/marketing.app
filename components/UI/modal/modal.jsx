import cl from "./modal.module.css";

export default function MyModal({ isOpen, toggleOpen, children }) {
    // Функция для предотвращения закрытия модалки при клике внутри
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={toggleOpen}
            className={`${cl.overlay}  ${isOpen ? cl.open : ""}`}
        >
            <div className={cl.modal} onClick={handleModalClick}>
                {children}
            </div>
        </div>
    );
}
