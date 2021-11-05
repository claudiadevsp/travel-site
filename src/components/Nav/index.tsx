type navProps = {
    image: string;
    text: string;
}

const Nav = (props: navProps) => {
    const { image, text } = props
    return (
        <ul>
            <li>Teste</li>
        </ul>
    )
}

export { Nav }