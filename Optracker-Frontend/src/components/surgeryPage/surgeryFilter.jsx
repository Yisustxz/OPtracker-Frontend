/* eslint-disable react/prop-types */
export default function SurgeryFilter({
  filters,
  activeFilter,
  onFilterChange
}) {
  return (
    <div className='flex space-x-4 py-4'>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded ${
            activeFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
