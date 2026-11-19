import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustonBreadcrumbs } from '@/components/custom/CustonBreadcrumbs';

export const SearchPage = () => {
    return (
        <>
            <CustomJumbotron title="Búsqueda de superhéroes" description="Descubre, explora y administra super héroes y villanos" />

            <CustonBreadcrumbs
                currentPage="Buscador de héroes"
            // breadcrumbs={[
            //     { label: 'Home 1', to: '/' },
            //     { label: 'Home 2', to: '/' },
            //     { label: 'Home 3', to: '/' },
            // ]}
            />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and search */}
            <SearchControls />
        </>
    )
}

export default SearchPage;