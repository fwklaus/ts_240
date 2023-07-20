// 1
// The code executes without any issues

// 2
// Will result in a type error
// Since we defined a length property on the Video type, the first branch of the conditional will run every time
// We can't call forEach on videoOrVideos in the case that it's an object