this ia random quote machine for free codecamp
      const fetchQuotes = async(url)=>{

    const response = await fetch(url);
    const parseJSON=response.json();
    setQuotesArray(parseJSON.quotes);
  }
  useEffect(()=>{
  fetchQuotes(quoteDb);

  },[quoteDb])