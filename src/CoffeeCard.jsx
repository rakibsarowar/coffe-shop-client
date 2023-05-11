import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    // Delete Operattion -------------------------------------
    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div >
            <div className="card card-side bg-base-100 shadow-xl m-20">
                <div className="w-3/12">
                    <figure><img className="" src={photo} alt="Movie" /></figure>
                </div>
                <div className="flex p-4 gap-4">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn btn-active">View</button>
                            <button className="btn">Edit</button>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn bg-orange-500">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;