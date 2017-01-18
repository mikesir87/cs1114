# CS1114 Notes

All material contained within this repository is being made freely available to any interested parties.  It is authored by Michael Irwin for the use of teaching CS1114 at Virginia Tech.  The general outline and order of the curriculum was already determined before I started.  But, the content and presentation of it is mine.


## Viewing Notes

The slides are available for viewing locally by using [Docker](https://docker.com).  After installing Docker and cloning this repo locally, one can simply run

```
docker-compose up
```

and open your browser to [http://localhost/slides/01-intro/](http://localhost/slides/01-intro/).  Simply swap out `01-intro` with the appropriate folder name found in the `slides` directory to view different slides.

In case you're interested into how it works... the slides are written in Markdown and rendered using [RemarkJS](https://remarkjs.com).  The Docker container builds upon the [hairyhenderson/remarkjs](https://hub.docker.com/r/hairyhenderson/remarkjs/) image (made by a fellow Docker organizer) and simply adds the "magic" URL routing to get the right slides.



## Contributing

If you find any typos, mistakes, or anything that's flat out wrong, feel free to fork and send a pull request.  

If you have a better idea on how to present a topic, feel free to create an issue to start a discussion!