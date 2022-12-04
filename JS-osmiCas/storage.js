// zacuvuvaat samo stringovi, jesoni

localStorage.setItem("username", "kate") // se dodeka ne se izbrise od , nikogas ne pravi clear, sami treba da iscistime
localStorage.setItem("password", "test123") // se dodeka ne se izbrise od 

localStorage.getItem() // da procitame nesto, ke ja vrati vrednsota na klucot i ke treba da se zapise vo nekoja promenliva,  pravi return

sessionStorage.setItem() // se dodeka e aktivna koga ke isklucis se brise

localStorage.removeItem("password")
localStorage.clear() // se se brise (koga se logirame na nekoja strana)

localStorage.length() //
localStorage.key(2) // ako pises 2 ke vi go vrati imeto na vtoriot kluc