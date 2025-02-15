type Author = {
    id: number;
    name: string;
}

const AuthorComponent = async ({userId}: {userId: number}) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user: Author = await response.json(); 
    return (
        <div className="text-sm text-gray-500">
            Written by:
            <span className="font-semibold text-gray-700 hover:text-gray-900 transition-color">{user.name}</span>
        </div>
    );
}

export default AuthorComponent;
