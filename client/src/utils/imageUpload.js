export const checkImage = (file) => {
    let err = ""
    if (!file) return err = "File doesn't exist."
    if (file.size > 1024 * 1024)
        err = "The largest image size is 1MB."

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        err = "Image format is incorrect."

    return err
}

export const imageUpload = async (images) => {
    let imgArr = [];
    for (const item of images) {
        const formData = new FormData()
        formData.append("file", item)

        formData.append("upload_preset", "ng3vylbr")
        formData.append("cloud_name", "dqg6s7kun")

        const res = await fetch("https://api.cloudinary.com/v1_1/dqg6s7kun/image/upload", {
            method: "POST",
            body: formData
        })
        const data = await res.json()
        imgArr.push({ public_id: data.public_id, url: data.secure_url })
    }
    return imgArr;
}