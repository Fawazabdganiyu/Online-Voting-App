import Fab from './Fab';
import Modal from './Modal';

export default function NewUserDashBoard({ toggle, isNew }) {

    return (
        <div className='container'>
            <h1 className="card-title mb-4">My Projects</h1>
            {isNew && <div className="alert alert-success" role="alert">
                <div className="d-flex justify-content-between gp-1">
                    <p className='alert-heading'>Congratulations on joining our platform! 🎉</p>
                    <button onClick={() => toggle(false)} type="button" className="btn-close p-0" data-bs-dismiss="alert" aria-label="Close" style={{width: '.8rem', height: '.8rem'}}></button>
                </div>
                <p>Start shaping the future by creating your first project today. </p>
                <p>Best of luck with your elections! 🗳️🌟</p>
            </div>}
            <p className='text-muted lh-sm px-0 text-center' style={{ fontSize: ".8rem"}}>You have no projects yet. Create a new project now</p>
            <hr />
            <Fab />
            <Modal />
        </div>
    )
}
