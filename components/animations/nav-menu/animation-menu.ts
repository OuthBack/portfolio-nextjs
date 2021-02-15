export default function animation(
    animation_name: string, animation_duration: number,
    icon_hover: number){

    return{
        "animation-duration": `${animation_duration}s`,
        "animation-name": animation_name,
        "--icon-hover": icon_hover, // 0 for false and 1 for true
        "pointer-events": 'none',
        "animation-fill-mode": "forwards",
    }
}