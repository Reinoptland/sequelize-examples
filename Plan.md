## Plan

- [x] NPM init / git init (setup)
- [x] Setup the elephantSQL db & config.json

Entities

#### Users

- [x] User model & Migration
- [x] Seeds for users (no foreign keys)

#### Stories

- [x] Story model & Migration

#### Profiles

- [x] Profiles model & Migration

#### Likes

- [x] Likes model & Migration

#### Add relationships (separate migration)

- [ ] Add associations

1. Write a migration to add the foreign keys
2. Add the relations to our sequelize models

- [x] Like belongsTo Story -> storyId on likes
- [x] Like belongsTo User -> userId on likes
- [x] Story belongsToMany User
- [x] User belongsToMany Story
- [x] Profile belongsTo User -> userId on profile
- [x] User hasOne Profile
- [x] User hasMany Story
- [x] Story belongsTo User -> userId on story

#### Add seed data

- [ ] Seeds for stories (related data, userId)
- [ ] Seeds for profiles (realted data, userId)
- [ ] Seeds for likes (related data, userId, storyId)
