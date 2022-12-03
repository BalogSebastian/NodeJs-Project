the chain turnery statement {

    if the content type is html and the request url is just a slash (/) than this will be the value and we set the path name using the views directory, and we set if for index.html  BUT if thats not the case => 

    if its a html contetType file then if the last charachter in the request url is a slash, this accounts for our subdirectory possible and not just the main directory. => This will be a little bit different cause we not only will need the 'views' and we need the request url that will specify the subdirectory and we set if for index.html . But if not thats case => 

     if the contentTpye is Html. And then we would look at whatever was requester in the views folder cause this is where the html should be, however if that't not the case =>
    
        we will use the directory name or the file path in the request url.Cause its could be css or an image.

}