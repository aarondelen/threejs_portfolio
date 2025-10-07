import { Toaster } from 'react-hot-toast'

const AppToaster = () => {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{
        className: '',
        style: {
          background: '#1A1A1A', 
          color: '#fff',
          borderRadius: '8px',
          padding: '12px 16px',
        },
      }} />
    </div>
  )
}

export default AppToaster
