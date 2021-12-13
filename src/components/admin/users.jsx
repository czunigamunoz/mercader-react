import ModalUser from "./modalUser";

const Users = () => {

    const handleModal = () => {
        document.querySelector('.modal').classList.add("modal--active");
    }

    return (
            <main>
                <section>
                    <div className="open" id="btnMenu">
                        <span className="material-icons-sharp">menu</span>
                    </div>
                    <h1>Admin Users</h1>
                    <div className="content">
                        <button type="button" onClick={handleModal}>Add User</button>
                        <div className="table__container">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Identification</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Zone</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody className="table-content" id="tableContent">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <ModalUser/>
            </main>
    )
}
export default Users;