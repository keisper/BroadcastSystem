import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import Record from "./routes/Record";
import RecordView from "./routes/Record";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CreateRoom} />
        <Route path="/room/:roomID" component={Room} />
        <Route path="/test" component={RecordView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
