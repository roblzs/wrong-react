function Input() {
    let [value, setValue] = useState("");
  
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
  
  export default Input;
  