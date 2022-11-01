## Additional comments

### Mark as Done - save to database

Everything on the frontend part works as expected, but `json-server`, when running as module, do not watch the `db.json` for changes. I created an endpoint that marks a TODO as Done, that TODO is then saved to the json database, but after page refresh, the server keeps sending old data... Dunno what to do with it, I gave it some time and I wasn't able to make overcome this problem.

### Input component has changed API (props)

It seemed really weird, that the Input component should be stateful. It actually had the exact same state as the component Form above it. I believe that in this solution, the Input component should be stateless, so I changed the props a little and the state of Input is saved only in the Form component.

### Header and refetch of items

In the `Header` and `NewItemTogglableForm` there are pieces of code commented out. I left it there on purpose, because with a very simple change (now commented out) I'm able to reduce the number of requests and I don't need to refetch all items again, when I add new TODO. With the provided props, I wasn't able to figure out solution better than the submitted one.
