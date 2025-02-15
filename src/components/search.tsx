import Form from "next/form";

const Search = () => {

    return (
        <Form action="/products-db" className="flex gap-2">
            <input name="query" type="text" className="flex-1 px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none" placeholder="Search products" />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Search
            </button>
        </Form>
    );
}

export default Search;