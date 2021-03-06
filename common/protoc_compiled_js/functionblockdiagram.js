// source: functionblockdiagram.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.FunctionBlockDiagram');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.FunctionBlock');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FunctionBlockDiagram = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FunctionBlockDiagram.repeatedFields_, null);
};
goog.inherits(proto.FunctionBlockDiagram, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FunctionBlockDiagram.displayName = 'proto.FunctionBlockDiagram';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FunctionBlockDiagram.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FunctionBlockDiagram.prototype.toObject = function(opt_includeInstance) {
  return proto.FunctionBlockDiagram.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FunctionBlockDiagram} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FunctionBlockDiagram.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    proto.FunctionBlock.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FunctionBlockDiagram}
 */
proto.FunctionBlockDiagram.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FunctionBlockDiagram;
  return proto.FunctionBlockDiagram.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FunctionBlockDiagram} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FunctionBlockDiagram}
 */
proto.FunctionBlockDiagram.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.FunctionBlock;
      reader.readMessage(value,proto.FunctionBlock.deserializeBinaryFromReader);
      msg.addBlocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FunctionBlockDiagram.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FunctionBlockDiagram.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FunctionBlockDiagram} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FunctionBlockDiagram.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.FunctionBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.FunctionBlockDiagram.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.FunctionBlockDiagram} returns this
 */
proto.FunctionBlockDiagram.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated FunctionBlock blocks = 2;
 * @return {!Array<!proto.FunctionBlock>}
 */
proto.FunctionBlockDiagram.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.FunctionBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.FunctionBlock, 2));
};


/**
 * @param {!Array<!proto.FunctionBlock>} value
 * @return {!proto.FunctionBlockDiagram} returns this
*/
proto.FunctionBlockDiagram.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.FunctionBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.FunctionBlock}
 */
proto.FunctionBlockDiagram.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.FunctionBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.FunctionBlockDiagram} returns this
 */
proto.FunctionBlockDiagram.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};


