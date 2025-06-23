import Salzburgcomproute from "../trailimprts/routecomp";
import Salzburgsharedcomp from "./Salzburgsharedcomp";

export const Salzburgadventureroute = () => {
    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburgadventure />}
            upper
            trailName='Adventure in Salzburg'
            bottom
        />
    )
};

export const Salzburglingoroute = () => {
    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburglingo />}
            upper
            trailName='Local Lingo'
            bottom
        />
    )
};

export const Salzburglingocategoriesroute = () => {

    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburglingocategories />}
            upper
            back
            trailName='Local Lingo'
        />
    )
};

export const Salzburgloaderroute = () => {
    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburgloader />}
        />
    )
};

export const Salzburgonboardroute = () => {
    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburgonboard />}
        />
    )
};

export const Salzburgsavedstoriesroute = () => {
    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburgsavedstories />}
            upper
            trailName='Discovery Collection'
        />
    )
};

export const Salzburgsecrettopicsroute = () => {

    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburgsecrettopics />}
            upper
            back
            trailName='Locals Secrets'
        />
    )
};

export const Salzburgsecretreadroute = ({ route }) => {
    const { secrets } = route.params;
    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburgsecretread secrets={secrets} />}
            upper
            back
            trailName='Locals Secrets'
        />
    )
};

export const Salzburgsecretsroute = () => {
    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburgsecrets />}
            upper
            trailName='Locals Secrets'
            bottom
        />
    )
};

export const Salzburgsettingsroute = () => {
    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburgsettings />}
            upper
            trailName='Settings'
            bottom
        />
    )
};

export const Salzburgstoriesroute = () => {
    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburgstories />}
            upper
            trailName='Hidden Stories'
            bottom
        />
    )
};

export const Salzburgstoryinforoute = ({ route }) => {
    const { story } = route.params;
    return (
        <Salzburgsharedcomp
            comp={<Salzburgcomproute.Salzburgstoryinfo story={story} />}
        />
    )
};