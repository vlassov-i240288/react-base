import { CircularProgress, Icon } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGists } from "../../store/gists/reducer";
import { selectGists, selectGistsError, selectGistsLoading } from "../../store/gists/reducer";
import "./Gits.css"

// export const GistsList = () => {
//     const [gists, setGists] = useState([]);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const requestGists = () => {
//         setLoading(true);
//         fetch(API_URL_PUBLIC)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`Request failed with status ${response.status}`);
//                 }

//                 return response.json();
//             })
//             .then((result) => setGists(result))
//             .catch((err) => {
//                 setError(true);
//                 console.log(err);
//             })
//             .finally(() => setLoading(false));
//     };

//     useEffect(() => {
//         requestGists();
//     }, []);

//     const renderGist = useCallback(
//         (gist) => <li className="ulGits" key={gist.id}>{gist.description}</li>,
//         []
//     );

//     if (error) {
//         return (
//             <div className="container">
//                 <h3>Ошибка подключения</h3>
//                 <div className="errorText">
//                     <span className="errorTextSpan">нажмите</span>
//                     <button className="errorGits" onClick={requestGists}>{<Icon>update</Icon>}</button>
//                     <span className="errorTextSpan">для обновления</span>
//                 </div>
//             </div>
//         );
//     };

//     if (loading) {
//         return (
//             <div className="gitsCentrWrap">
//                 <div className="gitsCentr">
//                     <CircularProgress />
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="container">
//             <ul>{gists.map(renderGist)}</ul>
//         </div>
//     );
// };


export const GistsList = () => {
    const dispatch = useDispatch();

    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(getAllGists());
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    );

    if (error) {
        return (
            <div className="container">
                <h3>Ошибка подключения</h3>
                <div className="errorText">
                    <span className="errorTextSpan">нажмите</span>
                    <button className="errorGits" onClick={requestGists}>{<Icon>update</Icon>}</button>
                    <span className="errorTextSpan">для обновления</span>
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="gitsCentrWrap">
                <div className="gitsCentr">
                    <CircularProgress />
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <ul>{gists.map(renderGist)}</ul>
        </div>
    );
};


