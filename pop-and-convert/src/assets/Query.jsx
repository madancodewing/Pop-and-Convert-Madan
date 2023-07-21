import { useQuery, useMutation, isError } from "@tanstack/react-query"

const TESTS = [
    { id: 1, name: 'Name 1' },
    { id: 2, name: 'Name 2' }

]

const PracticeQuery = () => {

    const testsQuery = useQuery({
        queryKey: ["tests"],
        queryFn: () => wait(1000).then(() => [...TESTS])
    })
    if (testsQuery.isLoading) return <h1>this is loading...</h1>
    if (testsQuery.isError) {
        return <pre>{JSON.stringify(testsQuery.error)}</pre>
    }
    return (
        <div>
            {testsQuery.data.map(test => (
                <div key={test.id}>
                    {test.name}
                </div>
            ))}
        </div>
    )

}

function wait(duration) {
    return new Promise(resolve => setTimeout(resolve, duration))
}

export default PracticeQuery