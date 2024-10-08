useEffect(() => {
    fetch("http://127.0.0.1:5000/productos")
      .then((data) => data.json())
      .then((data) => console.log(data));
  }, []);
  