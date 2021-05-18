# Tic Tac Toe

> This was an incomplete implementation, I didn't want to spend more time than alloted on getting things done. I also had some emphasis on getting documentation done.

## Tic Tac Toe Data Structure

So the first obstacle to tackle was structure of the tic tac toe board in JS. I had orginally went with a 2d boards which looked like: 
```
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]

```

The issue I ran into this was that in the future I wanted to turn each block into a vue component in the vuture and couldn't find a clean implementation for the vueFor.

At the end of the day I went with the simplest implementation since I had a limited amount of time:
```
["","","","","","","","",""]
```

An idea I had was also possibly doing it in a object format, but I decided spending too much time deciding on structure wasn't a good use of time.

## Enum for value inside of board value.

One of the things that I started with was using TypeScript, but I decided since it'd be quicker to just use javascript I would do that. Future feature implementation would be adding typescript and adding enum so we can have a more intuitive value for the board.

## Invite functionality

I was working on invite functionality which would use UUID (I Believe) for room generation, and the general idea was having an icon with mail which when pressed pastes invite link to users clipboard.
