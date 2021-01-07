---
marp: true
---

# Manuscript Manager

Language for manuscript:

## Supports
- Writing repliques for the Narrator and different Roles
- Define voices for Roles
- Roles can speak their repliques with different languages
- Name Waits (silence between sounds)
- Name mp3 Sounds and play them
- Create mp3 Sounds
- Group Roles and Sounds
- Groups and speak their repliques  

## Elements

### Role
1. Define each Role 
- name
- voice: pitch, rate, gain, language
- alias name
2. role object 
- speaks repliques
- creates sound

### Wait

### Sound
- start1, end 1/length 1, start2, end 2/length 2
- reverse 

### Group

### Settings

## Future
- make an mp3 file
- write formal manuscript (sisennykset)
- tavutusvihje

- pitäisikö mp3 generoida lennossa vai vasta lopussa vai optiolla  
- action (tai muu): tehdään oliosta klooni ja attribuutit korvataan yliajoarvoilla


- teksti näkyisi puhuttaessa
- kuvia, videoita (videon tekstitys?)
- roolin kerrallaan voisi puhua

moduulit:
- p5, audio

Kokeile kääntäjää:
- minimaalinen rekursiokieli
- output js
- laskenta, input, output, funktio, if


fib = (n) :
n <= 0 => 1,
n = 1 => 1,
n > 1 => fib(fib(n-1), fib(n-2))

n = ?
f = fib(n)
f

simple : ( def | exp )*
def : name '(' plist ')' ':' statement (',' statement)

statement : output |  assignment

output : expression
assignment : symbol '=' expression
