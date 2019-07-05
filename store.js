import React, { useState } from 'react';

export const RosterContext = React.createContext('roster');
export const ExistingPlayersContext = React.createContext('existingPlayers');
export const LoadingContext = React.createContext('loading');

const Store = ({children}) => {

    const [rosterList, setRosterList] = useState([]);
    const [existingPlayersList, setExistingPlayersList] = useState(existingPlayerList);
    const [loading, setLoading] = useState('false');

    return (
        <LoadingContext.Provider value={[loading, setLoading]}>
            <RosterContext.Provider value={[rosterList, setRosterList]}>
            <ExistingPlayersContext.Provider value={[existingPlayersList, setExistingPlayersList]}>
                {children}
            </ExistingPlayersContext.Provider>
            </RosterContext.Provider>
        </LoadingContext.Provider>
    )
};

const existingPlayerList = [
  {
    key: '1',
    wins: 3,
    losses: 2,
    bestScore: 10100,
    name: 'Kevin'
  },
  {
    key: '2',
    wins: 1,
    losses: 4,
    bestScore: 10500,
    name: 'Sigrid'
  },
  {
    key: '3',
    wins: 5,
    losses: 3,
    bestScore: 10600,
    name: 'Rose'
  }
];

export default Store;