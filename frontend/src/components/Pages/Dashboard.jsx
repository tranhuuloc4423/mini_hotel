import Table from '../Table'

const Dashboard = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 w-full gap-10 mt-5">
            <Table title={'Room state'} />
            <Table title={'Revenue'} />
            <Table title={'List of available rooms'} />
            <Table title={'Customer list lacks money'} />
        </div>
    )
}

export default Dashboard
