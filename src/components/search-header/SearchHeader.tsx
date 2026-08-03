import style from "./SearchHeader.module.css";

interface Props {
    className: string;
    label: string;
    categories: {
        id: number;
        name: string;
    }[];
}

// todo: Make a good ux for searching and narrowing by category
export default function SearchHeader({ className, label, categories }: Props) {
    return (
        <header className={className}>
            <h1>{label}</h1>
            <form action="">
                <input
                    type="search"
                    name="q"
                    id="header-search"
                    className={style.searchbar}
                />
                <div>
                    {categories.map((category) => (
                        <button
                            type="button"
                            key={category.id}
                            className={style.categoryBtn}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </form>
        </header>
    );
}
