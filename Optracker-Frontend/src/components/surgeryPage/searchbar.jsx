// eslint-disable-next-line react/prop-types
export default function SearchBar({ onSearch }) {
  return (
    <div className='py-4'>
      <input
        type='text'
        placeholder='Buscar Cirugía'
        className='w-full px-4 py-2 border border-gray-300 rounded'
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
