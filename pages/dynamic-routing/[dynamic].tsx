/**
 * Any route will use this file
 */
export default function Route(){
    return <h1>Dynamic Route</h1>
}

/**
 * http://localhost:3000/dynamic-routing/asdaadadasdasd WORKS 
 * http://localhost:3000/dynamic-routing/asd12312312asd WORKS
 * http://localhost:3000/dynamic-routing/asdarftwfw/abc - NOT WORKS
 *                                                       - 2 Segments NOT WORK
 * 
 * */ 