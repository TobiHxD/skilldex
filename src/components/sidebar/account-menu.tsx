export default function AccountMenu({ visible }: { visible: boolean }) {
    return (
        <div className={visible ? "" : "hidden"}>
            Account Menu
        </div>
    )
}