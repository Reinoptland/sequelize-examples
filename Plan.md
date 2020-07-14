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
- [ ] Like belongsTo Story
- [ ] Like belongsTo User
- [ ] Story belongsToMany User
- [ ] User belongsToMany Story
- [ ] Profile belongsTo User
- [ ] User hasOne Profile
- [ ] User hasMany Story
- [ ] Story belongsTo User

#### Add seed data

- [ ] Seeds for stories (related data, userId)
- [ ] Seeds for profiles (realted data, userId)
- [ ] Seeds for likes (related data, userId, storyId)
