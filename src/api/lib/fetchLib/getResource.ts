export default async function getResource<Type>(
    resourcePath: string,
    isResource: (obj: any) => obj is Type,
) {
    const url = import.meta.env.VITE_API_URL + resourcePath;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Error fetching ${resourcePath}, status: ${response.status}`,
            );
        }

        const data = await response.json();
        if (Array.isArray(data) && data.every(isResource)) {
            return data;
        }

        throw new Error(`Error fetching ${resourcePath}, unexpected response`, {
            cause: data,
        });
    } catch (e) {
        console.error(e);
        return;
    }
}
