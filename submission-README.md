- nefungujici save do databaze (mark as done) - je nutny restart serveru. Nevim, nejaky bullshit s json-server, ktery kdyz je spusteny jako modul, neumoznuje prepinac --watch. Manualne udelam zmeny v "db" a server vraci stare hodnoty...
- upravena komponenta Input - prislo mi, ze je bullshit mit Input jako stateful komponentu, kdyz si identicky state drzi komponenta Form nad ni...
- zvlastne reseny Header - zamerne jsem tam nechal kusy kodu zakomentovane, jak bych to idealne upravil. Zbavil bych se refetchovani vsech itemu pri pridani noveho todo (o request min). Myslim, ze to nejde udelat s takhle pevne danymi props.