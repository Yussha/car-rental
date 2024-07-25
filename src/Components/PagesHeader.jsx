export default function PagesHeader({ children }) {
    return (
        <div className="customPagesHeader relative h-52">
            <div className={`customOverlay absolute top-0 left-0 bottom-0 right-0 z-10`}></div>
            <div className="absolute z-20 top-0 bottom-0 left-0 right-0 flex justify-center items-center">
                <h1 className="font-bold text-5xl">{children}</h1>
            </div>
        </div>
    )
}