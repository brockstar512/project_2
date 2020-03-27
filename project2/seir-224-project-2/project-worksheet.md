# Project Overview

## Project Links

- [add your github repo link](https://github.com/brockstar512/project_2)
- [add your deployment link]()

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

I will be making a dictionary app. It will give the user a library of words and if you click on the words it will give the user a definition on a new component page.



dictionary https://www.dictionaryapi.com/api/v3/references/sd4/json/baseball?key=your-api-key
Key (Dictionary):

023e133d-53db-4dad-94d5-5139255f9b6e

Key (Thesaurus):

af41af7a-ec0b-480f-a95c-bd85f44cf8b2





## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

```
{data: {meta:{  
    id:"baseball",
    uuid:"5baf923f-d3d2-4f89-b222-379abca062ea",
    update:"original",
    src:"sch_dict",
    section:"alpha",
    stems:[  
        "baseball",
        "baseballs"
    ],
    offensive:false
},
hwi:{  
    hw:"base*ball",
    prs:[  
        {  
            mw:"ˈbās-ˌbȯl",
            sound:{  
                audio:"baseba01"
            }
        }
    ]
},
fl:"noun",
def:[  
    {  
        sseq:[  
            [  
                [  
                    "sense",
                    {  
                        dt:[  
                            [  
                                "text",
                                "{bc}a game played with a bat and ball between two teams of nine players each on a field with four bases that mark the course a runner must take to score"
                            ]
                        ],
                        sdsense:{  
                            sd:"also",
                            dt:[  
                                [  
                                    "text",
                                    "{bc}the ball used in this game"
                                ]
                            ]
                        }
                    }
                ]
            ]
        ]
    }
],
shortdef:[  
    "a game played with a bat and ball between two teams of nine players each on a field with four bases that mark the course a runner must take to score; also : the ball used in this game"
]} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- have a page of a list of words.
- have a definition page

#### PostMVP EXAMPLE

- Add cool styling
- add a list of collected words and their definition
- add a word of the day
- add a search function
<!-- - add a search for a thesarus -->

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Main | This will render the main and will be parent to other components| 
| list | This be a list of the words.| 
| definition | This will render the defintion of the word you have clicked| 




Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| tbd | tbd |
| Working with API | H | 3hrs| tbd| tbd |
| gettin pages to render | H | 3hrs| tbd| tbd |
| adding styling| H | 3hrs| tbd | tbd |
|adding search component | H | 3hrs| tbd | tbd |
| Total | H | 15hrs| tbd | tbd |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
