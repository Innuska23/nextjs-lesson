export async function revalidatePath(path: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SECRET_TOKEN}/api/revalidate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path }),
    });

    if (!res.ok) {
        throw new Error(`Failed to revalidate path: ${path}`);
    }
}
