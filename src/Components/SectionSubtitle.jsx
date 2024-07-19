
export default function SectionSubtitle({ children }) {
    return (
        <div style={{ backgroundColor: "#fff", }} className="w-fit p-2 rounded-md">
            <h2 className={`customSubtitle text-center`}>{children}</h2>
        </div>
    )
}