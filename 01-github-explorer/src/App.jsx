import { Counter } from './components/Counter';
import { RepositoryList } from './components/repositoryList';

import './styles/global.scss';

export function App() {

    return (
        <div>
        <RepositoryList />
        <Counter />        
        </div>
    )
}