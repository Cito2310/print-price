interface props {
    element: "minus" | "square" | "xcross";
    onClick: () => void;
}

export const ButtonWindow = ({ element, onClick }: props) => (
    <button
    onClick={onClick}
    className="
        w-[45px] not-draggable flex justify-center items-center transition-base
        bg-[#161616] hover:bg-[#353535] active:bg-[#525252]
    ">
        {
            element === "minus" ? <svg xmlns="http://www.w3.org/2000/svg" height="1.1em" width="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>

            : element === "square" ? <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" width="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>

            : element === "xcross" ? <svg xmlns="http://www.w3.org/2000/svg" height="1.1em" width="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>

            : null
        }
    </button>
)