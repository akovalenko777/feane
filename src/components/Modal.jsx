import '../assets/css/modal.scss';

export default function Modal({isOpen, title, children, onClose, size}){
  return <div className={`my-modal-wrapper ${isOpen ? 'open' : ''}`}>
    <div className={`my-modal ${size || 'middle'}`}>
      <div className="my-modal-header">
        <div className="my-modal-title">{title}</div>
        <div className="my-modal-close">
          <button type="button" onClick={()=>{onClose()}}>&times;</button>
        </div>
      </div>
      <div className="my-modal-body">
        <div className="my-modal-content">
          {children}
        </div>
      </div>
    </div>
  </div>
}