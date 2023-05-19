const BioItem = ({ title, value }) => (
    <div className='my-7'>
        <span className='text-sm  font-normal'>{title}</span>
        <p className='text-base font-medium'>{value}</p>
    </div>
)
export default BioItem