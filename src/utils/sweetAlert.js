import Swal from "sweetalert2";

class SweetAlert{
    confirmAlert(){
        return Swal.fire({
            title: "Are you sure to proceed?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: "Yes, I'm sure"
        }).then((result) => {
            return !!result.isConfirmed;
        });
    }

    errorAlert(text){
        return Swal.fire({
            icon: "error",
            title: "Error!",
            text,
            showConfirmButton: true,
            confirmButtonColor: "#d33"
        });
    }

    successAlert(title){
        return Swal.fire({
            icon: "success",
            title,
            showConfirmButton: false,
            timer: 1500
        });
    }
}

const sweetAlert = new SweetAlert();
export default sweetAlert;