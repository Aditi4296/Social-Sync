export const checkImage = (file)=> {
    let err = ""
    if(!file) return err = "File doesn't exist."
    if(file.size > 1024 * 1024)
        err = "The largest image size is 1MB."

    if(file.type !== 'image/jpng' && file.type!== 'image/png')
    err = "Image format is incorrect."

    return err
}