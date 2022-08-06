import './search-box.scss'

const SearchBox = ({placeholder, onChange, value, onKeyPress, ...others}) => {
  
  return (
    <div className="search-box">
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
        className='search-bar'
        {...others}
      />
    </div>
  );
}

export default SearchBox