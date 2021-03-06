/**
 *   ___             _   ___                       EventSauce
 *   | __|_ _____ _ _| |_/ __| __ _ _  _ __ ___    CQRS / Event Sourcing Framework for NodeJS
 *   | _|\ V / -_) ' \  _\__ \/ _` | || / _/ -_)   (c) 2016 Steve Gray / eventualconsistency.net
 *   |___|\_/\___|_||_\__|___/\__,_|\_,_\__\___|   This code is GPL v2.0 licenced.
 **/
'use strict';

const Aggregate = require('./aggregate');
const AggregateSnapshot = require('./aggregate-snapshot');
const AggregateEvent = require('./aggregate-event');
const AggregateFactory = require('./aggregate-factory');
const BoundedContext = require('./bounded-context');
const CommandBus = require('./command-bus');
const JournalEntry = require('./journal-entry');
const MemoryRepository = require('./memory-repository');
const Repository = require('./repository');
const simple = require('./simple-sauce');

module.exports = {
  Aggregate,
  AggregateEvent,
  AggregateFactory,
  AggregateSnapshot,
  BoundedContext,
  CommandBus,
  JournalEntry,
  MemoryRepository,
  Repository,
  simple,
};
