import FirebaseContext from './context'
import firebase from './firebase'

const ProjectState = ({ children }) => {
    return ( 
        <FirebaseContext.Provider
            value={{
                firebase
            }}
        >
            {children}
        </FirebaseContext.Provider>
     )
}
 
export default ProjectState