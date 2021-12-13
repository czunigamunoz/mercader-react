const Dashboard = () => {
    const styleTemporal = {
        marginTop: '20rem',
        marginLeft: '5rem'
    }
    return (
        <main>
            <section>
                <div className="open" id="btnMenu">
                    <span className="material-icons-sharp">menu</span>
                </div>
                <h1>Dashboard</h1>
                <div className="content">
                    <h1 style={styleTemporal}>Site under construction, please visit the
                        users and products section.</h1>
                </div>
            </section>
        </main>
    )
}
export default Dashboard;